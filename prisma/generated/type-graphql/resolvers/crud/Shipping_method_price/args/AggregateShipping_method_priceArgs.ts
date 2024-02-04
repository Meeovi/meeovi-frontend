import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shipping_method_priceOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Shipping_method_priceOrderByWithRelationAndSearchRelevanceInput";
import { Shipping_method_priceWhereInput } from "../../../inputs/Shipping_method_priceWhereInput";
import { Shipping_method_priceWhereUniqueInput } from "../../../inputs/Shipping_method_priceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateShipping_method_priceArgs {
  @TypeGraphQL.Field(_type => Shipping_method_priceWhereInput, {
    nullable: true
  })
  where?: Shipping_method_priceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Shipping_method_priceOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Shipping_method_priceOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Shipping_method_priceWhereUniqueInput, {
    nullable: true
  })
  cursor?: Shipping_method_priceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
