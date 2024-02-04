import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_languageWhereInput } from "../../../inputs/Sales_channel_languageWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySales_channel_languageArgs {
  @TypeGraphQL.Field(_type => Sales_channel_languageWhereInput, {
    nullable: true
  })
  where?: Sales_channel_languageWhereInput | undefined;
}
