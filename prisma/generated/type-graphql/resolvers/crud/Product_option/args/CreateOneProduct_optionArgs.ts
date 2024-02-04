import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_optionCreateInput } from "../../../inputs/Product_optionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProduct_optionArgs {
  @TypeGraphQL.Field(_type => Product_optionCreateInput, {
    nullable: false
  })
  data!: Product_optionCreateInput;
}
