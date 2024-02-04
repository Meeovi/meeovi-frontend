import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_domainCreateManyInput } from "../../../inputs/Sales_channel_domainCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySales_channel_domainArgs {
  @TypeGraphQL.Field(_type => [Sales_channel_domainCreateManyInput], {
    nullable: false
  })
  data!: Sales_channel_domainCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
