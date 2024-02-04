import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_custom_field_setCreateInput } from "../../../inputs/Product_custom_field_setCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProduct_custom_field_setArgs {
  @TypeGraphQL.Field(_type => Product_custom_field_setCreateInput, {
    nullable: false
  })
  data!: Product_custom_field_setCreateInput;
}
