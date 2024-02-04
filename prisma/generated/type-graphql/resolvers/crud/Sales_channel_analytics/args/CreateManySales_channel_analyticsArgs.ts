import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_analyticsCreateManyInput } from "../../../inputs/Sales_channel_analyticsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySales_channel_analyticsArgs {
  @TypeGraphQL.Field(_type => [Sales_channel_analyticsCreateManyInput], {
    nullable: false
  })
  data!: Sales_channel_analyticsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
