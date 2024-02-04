import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_type_translationCreateInput } from "../../../inputs/Sales_channel_type_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSales_channel_type_translationArgs {
  @TypeGraphQL.Field(_type => Sales_channel_type_translationCreateInput, {
    nullable: false
  })
  data!: Sales_channel_type_translationCreateInput;
}
