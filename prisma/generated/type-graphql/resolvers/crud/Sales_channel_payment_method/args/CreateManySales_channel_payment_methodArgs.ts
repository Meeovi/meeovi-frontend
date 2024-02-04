import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_payment_methodCreateManyInput } from "../../../inputs/Sales_channel_payment_methodCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySales_channel_payment_methodArgs {
  @TypeGraphQL.Field(_type => [Sales_channel_payment_methodCreateManyInput], {
    nullable: false
  })
  data!: Sales_channel_payment_methodCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
