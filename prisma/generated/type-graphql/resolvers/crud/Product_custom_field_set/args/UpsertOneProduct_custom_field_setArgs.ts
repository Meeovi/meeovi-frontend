import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_custom_field_setCreateInput } from "../../../inputs/Product_custom_field_setCreateInput";
import { Product_custom_field_setUpdateInput } from "../../../inputs/Product_custom_field_setUpdateInput";
import { Product_custom_field_setWhereUniqueInput } from "../../../inputs/Product_custom_field_setWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProduct_custom_field_setArgs {
  @TypeGraphQL.Field(_type => Product_custom_field_setWhereUniqueInput, {
    nullable: false
  })
  where!: Product_custom_field_setWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_custom_field_setCreateInput, {
    nullable: false
  })
  create!: Product_custom_field_setCreateInput;

  @TypeGraphQL.Field(_type => Product_custom_field_setUpdateInput, {
    nullable: false
  })
  update!: Product_custom_field_setUpdateInput;
}
