import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Landing_page_sales_channelCreateManyInput } from "../../../inputs/Landing_page_sales_channelCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyLanding_page_sales_channelArgs {
  @TypeGraphQL.Field(_type => [Landing_page_sales_channelCreateManyInput], {
    nullable: false
  })
  data!: Landing_page_sales_channelCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
