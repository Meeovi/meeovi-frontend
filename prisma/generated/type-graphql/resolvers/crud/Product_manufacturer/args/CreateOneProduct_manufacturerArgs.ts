import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_manufacturerCreateInput } from "../../../inputs/Product_manufacturerCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProduct_manufacturerArgs {
  @TypeGraphQL.Field(_type => Product_manufacturerCreateInput, {
    nullable: false
  })
  data!: Product_manufacturerCreateInput;
}
