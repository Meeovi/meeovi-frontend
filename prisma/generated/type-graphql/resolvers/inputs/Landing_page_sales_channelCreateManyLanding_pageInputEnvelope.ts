import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_page_sales_channelCreateManyLanding_pageInput } from "../inputs/Landing_page_sales_channelCreateManyLanding_pageInput";

@TypeGraphQL.InputType("Landing_page_sales_channelCreateManyLanding_pageInputEnvelope", {})
export class Landing_page_sales_channelCreateManyLanding_pageInputEnvelope {
  @TypeGraphQL.Field(_type => [Landing_page_sales_channelCreateManyLanding_pageInput], {
    nullable: false
  })
  data!: Landing_page_sales_channelCreateManyLanding_pageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
