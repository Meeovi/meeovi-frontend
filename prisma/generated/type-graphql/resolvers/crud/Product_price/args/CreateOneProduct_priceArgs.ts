import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_priceCreateInput } from "../../../inputs/Product_priceCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProduct_priceArgs {
  @TypeGraphQL.Field(_type => Product_priceCreateInput, {
    nullable: false
  })
  data!: Product_priceCreateInput;
}
