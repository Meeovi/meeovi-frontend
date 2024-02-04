import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_type_translationWhereUniqueInput } from "../../../inputs/Sales_channel_type_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSales_channel_type_translationOrThrowArgs {
  @TypeGraphQL.Field(_type => Sales_channel_type_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Sales_channel_type_translationWhereUniqueInput;
}
