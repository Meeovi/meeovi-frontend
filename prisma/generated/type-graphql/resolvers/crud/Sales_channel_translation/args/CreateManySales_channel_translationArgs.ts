import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_translationCreateManyInput } from "../../../inputs/Sales_channel_translationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySales_channel_translationArgs {
  @TypeGraphQL.Field(_type => [Sales_channel_translationCreateManyInput], {
    nullable: false
  })
  data!: Sales_channel_translationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
