import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_exportWhereUniqueInput } from "../../../inputs/Product_exportWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneProduct_exportArgs {
  @TypeGraphQL.Field(_type => Product_exportWhereUniqueInput, {
    nullable: false
  })
  where!: Product_exportWhereUniqueInput;
}
