import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_propertyWhereUniqueInput } from "../../../inputs/Product_propertyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneProduct_propertyArgs {
  @TypeGraphQL.Field(_type => Product_propertyWhereUniqueInput, {
    nullable: false
  })
  where!: Product_propertyWhereUniqueInput;
}
