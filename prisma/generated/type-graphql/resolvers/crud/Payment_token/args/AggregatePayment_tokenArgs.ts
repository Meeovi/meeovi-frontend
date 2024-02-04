import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Payment_tokenOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Payment_tokenOrderByWithRelationAndSearchRelevanceInput";
import { Payment_tokenWhereInput } from "../../../inputs/Payment_tokenWhereInput";
import { Payment_tokenWhereUniqueInput } from "../../../inputs/Payment_tokenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePayment_tokenArgs {
  @TypeGraphQL.Field(_type => Payment_tokenWhereInput, {
    nullable: true
  })
  where?: Payment_tokenWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Payment_tokenOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Payment_tokenOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Payment_tokenWhereUniqueInput, {
    nullable: true
  })
  cursor?: Payment_tokenWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
