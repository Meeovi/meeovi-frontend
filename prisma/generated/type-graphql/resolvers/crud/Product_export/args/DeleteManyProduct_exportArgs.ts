import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_exportWhereInput } from "../../../inputs/Product_exportWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProduct_exportArgs {
  @TypeGraphQL.Field(_type => Product_exportWhereInput, {
    nullable: true
  })
  where?: Product_exportWhereInput | undefined;
}
