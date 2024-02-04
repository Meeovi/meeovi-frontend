import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_visibilityCreateInput } from "../../../inputs/Product_visibilityCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProduct_visibilityArgs {
  @TypeGraphQL.Field(_type => Product_visibilityCreateInput, {
    nullable: false
  })
  data!: Product_visibilityCreateInput;
}
