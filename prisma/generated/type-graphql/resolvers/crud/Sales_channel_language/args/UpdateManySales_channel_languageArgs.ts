import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_languageUpdateManyMutationInput } from "../../../inputs/Sales_channel_languageUpdateManyMutationInput";
import { Sales_channel_languageWhereInput } from "../../../inputs/Sales_channel_languageWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySales_channel_languageArgs {
  @TypeGraphQL.Field(_type => Sales_channel_languageUpdateManyMutationInput, {
    nullable: false
  })
  data!: Sales_channel_languageUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Sales_channel_languageWhereInput, {
    nullable: true
  })
  where?: Sales_channel_languageWhereInput | undefined;
}
