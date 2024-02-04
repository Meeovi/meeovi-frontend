import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_refundOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Adyen_refundOrderByWithRelationAndSearchRelevanceInput";
import { Adyen_refundWhereInput } from "../../../inputs/Adyen_refundWhereInput";
import { Adyen_refundWhereUniqueInput } from "../../../inputs/Adyen_refundWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateAdyen_refundArgs {
  @TypeGraphQL.Field(_type => Adyen_refundWhereInput, {
    nullable: true
  })
  where?: Adyen_refundWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Adyen_refundOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Adyen_refundOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Adyen_refundWhereUniqueInput, {
    nullable: true
  })
  cursor?: Adyen_refundWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
