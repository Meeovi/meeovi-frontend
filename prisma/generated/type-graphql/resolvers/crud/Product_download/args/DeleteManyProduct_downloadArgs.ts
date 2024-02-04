import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_downloadWhereInput } from "../../../inputs/Product_downloadWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProduct_downloadArgs {
  @TypeGraphQL.Field(_type => Product_downloadWhereInput, {
    nullable: true
  })
  where?: Product_downloadWhereInput | undefined;
}
