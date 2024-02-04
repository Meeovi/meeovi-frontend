import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_api_contextCreateManyInput } from "../../../inputs/Sales_channel_api_contextCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySales_channel_api_contextArgs {
  @TypeGraphQL.Field(_type => [Sales_channel_api_contextCreateManyInput], {
    nullable: false
  })
  data!: Sales_channel_api_contextCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
