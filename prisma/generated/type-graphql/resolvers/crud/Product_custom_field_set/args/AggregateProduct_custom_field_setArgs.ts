import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_custom_field_setOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_custom_field_setOrderByWithRelationAndSearchRelevanceInput";
import { Product_custom_field_setWhereInput } from "../../../inputs/Product_custom_field_setWhereInput";
import { Product_custom_field_setWhereUniqueInput } from "../../../inputs/Product_custom_field_setWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateProduct_custom_field_setArgs {
  @TypeGraphQL.Field(_type => Product_custom_field_setWhereInput, {
    nullable: true
  })
  where?: Product_custom_field_setWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_custom_field_setOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Product_custom_field_setOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_custom_field_setWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_custom_field_setWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
