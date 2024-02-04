import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_reviewCreateInput } from "../../../inputs/Product_reviewCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProduct_reviewArgs {
  @TypeGraphQL.Field(_type => Product_reviewCreateInput, {
    nullable: false
  })
  data!: Product_reviewCreateInput;
}
