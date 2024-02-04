import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_custom_field_setWhereInput } from "../../../inputs/Product_custom_field_setWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProduct_custom_field_setArgs {
  @TypeGraphQL.Field(_type => Product_custom_field_setWhereInput, {
    nullable: true
  })
  where?: Product_custom_field_setWhereInput | undefined;
}
