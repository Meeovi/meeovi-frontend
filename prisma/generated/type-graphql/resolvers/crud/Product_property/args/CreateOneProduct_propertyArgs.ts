import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_propertyCreateInput } from "../../../inputs/Product_propertyCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProduct_propertyArgs {
  @TypeGraphQL.Field(_type => Product_propertyCreateInput, {
    nullable: false
  })
  data!: Product_propertyCreateInput;
}
