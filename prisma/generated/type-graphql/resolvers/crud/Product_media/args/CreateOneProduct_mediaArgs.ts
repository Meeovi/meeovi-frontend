import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_mediaCreateInput } from "../../../inputs/Product_mediaCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProduct_mediaArgs {
  @TypeGraphQL.Field(_type => Product_mediaCreateInput, {
    nullable: false
  })
  data!: Product_mediaCreateInput;
}
