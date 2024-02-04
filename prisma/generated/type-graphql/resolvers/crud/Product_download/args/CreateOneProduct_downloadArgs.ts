import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_downloadCreateInput } from "../../../inputs/Product_downloadCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProduct_downloadArgs {
  @TypeGraphQL.Field(_type => Product_downloadCreateInput, {
    nullable: false
  })
  data!: Product_downloadCreateInput;
}
