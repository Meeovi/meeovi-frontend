import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_exportCreateInput } from "../../../inputs/Product_exportCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProduct_exportArgs {
  @TypeGraphQL.Field(_type => Product_exportCreateInput, {
    nullable: false
  })
  data!: Product_exportCreateInput;
}
