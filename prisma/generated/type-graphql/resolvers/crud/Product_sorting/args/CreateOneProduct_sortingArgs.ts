import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_sortingCreateInput } from "../../../inputs/Product_sortingCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProduct_sortingArgs {
  @TypeGraphQL.Field(_type => Product_sortingCreateInput, {
    nullable: false
  })
  data!: Product_sortingCreateInput;
}
