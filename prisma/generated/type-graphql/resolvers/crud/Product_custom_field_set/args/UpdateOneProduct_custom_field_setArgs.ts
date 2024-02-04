import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_custom_field_setUpdateInput } from "../../../inputs/Product_custom_field_setUpdateInput";
import { Product_custom_field_setWhereUniqueInput } from "../../../inputs/Product_custom_field_setWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProduct_custom_field_setArgs {
  @TypeGraphQL.Field(_type => Product_custom_field_setUpdateInput, {
    nullable: false
  })
  data!: Product_custom_field_setUpdateInput;

  @TypeGraphQL.Field(_type => Product_custom_field_setWhereUniqueInput, {
    nullable: false
  })
  where!: Product_custom_field_setWhereUniqueInput;
}
