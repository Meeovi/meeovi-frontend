import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_custom_field_setWhereUniqueInput } from "../../../inputs/Product_custom_field_setWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProduct_custom_field_setArgs {
  @TypeGraphQL.Field(_type => Product_custom_field_setWhereUniqueInput, {
    nullable: false
  })
  where!: Product_custom_field_setWhereUniqueInput;
}
