import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_cross_sellingCreateInput } from "../../../inputs/Product_cross_sellingCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProduct_cross_sellingArgs {
  @TypeGraphQL.Field(_type => Product_cross_sellingCreateInput, {
    nullable: false
  })
  data!: Product_cross_sellingCreateInput;
}
