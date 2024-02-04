import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_page_sales_channelCreateManyLanding_pageInputEnvelope } from "../inputs/Landing_page_sales_channelCreateManyLanding_pageInputEnvelope";
import { Landing_page_sales_channelCreateOrConnectWithoutLanding_pageInput } from "../inputs/Landing_page_sales_channelCreateOrConnectWithoutLanding_pageInput";
import { Landing_page_sales_channelCreateWithoutLanding_pageInput } from "../inputs/Landing_page_sales_channelCreateWithoutLanding_pageInput";
import { Landing_page_sales_channelWhereUniqueInput } from "../inputs/Landing_page_sales_channelWhereUniqueInput";

@TypeGraphQL.InputType("Landing_page_sales_channelCreateNestedManyWithoutLanding_pageInput", {})
export class Landing_page_sales_channelCreateNestedManyWithoutLanding_pageInput {
  @TypeGraphQL.Field(_type => [Landing_page_sales_channelCreateWithoutLanding_pageInput], {
    nullable: true
  })
  create?: Landing_page_sales_channelCreateWithoutLanding_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_sales_channelCreateOrConnectWithoutLanding_pageInput], {
    nullable: true
  })
  connectOrCreate?: Landing_page_sales_channelCreateOrConnectWithoutLanding_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => Landing_page_sales_channelCreateManyLanding_pageInputEnvelope, {
    nullable: true
  })
  createMany?: Landing_page_sales_channelCreateManyLanding_pageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_sales_channelWhereUniqueInput], {
    nullable: true
  })
  connect?: Landing_page_sales_channelWhereUniqueInput[] | undefined;
}
