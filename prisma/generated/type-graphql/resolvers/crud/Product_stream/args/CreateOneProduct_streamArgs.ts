import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_streamCreateInput } from "../../../inputs/Product_streamCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProduct_streamArgs {
  @TypeGraphQL.Field(_type => Product_streamCreateInput, {
    nullable: false
  })
  data!: Product_streamCreateInput;
}
