import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channel_typeCreateManyInput } from "../../../inputs/Sales_channel_typeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySales_channel_typeArgs {
  @TypeGraphQL.Field(_type => [Sales_channel_typeCreateManyInput], {
    nullable: false
  })
  data!: Sales_channel_typeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
