import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_tagOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Customer_tagOrderByWithRelationAndSearchRelevanceInput";
import { Customer_tagWhereInput } from "../../../inputs/Customer_tagWhereInput";
import { Customer_tagWhereUniqueInput } from "../../../inputs/Customer_tagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCustomer_tagArgs {
  @TypeGraphQL.Field(_type => Customer_tagWhereInput, {
    nullable: true
  })
  where?: Customer_tagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Customer_tagOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Customer_tagOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_tagWhereUniqueInput, {
    nullable: true
  })
  cursor?: Customer_tagWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
