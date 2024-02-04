import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_tagCreateInput } from "../../../inputs/Product_tagCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProduct_tagArgs {
  @TypeGraphQL.Field(_type => Product_tagCreateInput, {
    nullable: false
  })
  data!: Product_tagCreateInput;
}
