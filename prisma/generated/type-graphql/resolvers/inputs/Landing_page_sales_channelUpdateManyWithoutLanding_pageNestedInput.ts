import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_page_sales_channelCreateManyLanding_pageInputEnvelope } from "../inputs/Landing_page_sales_channelCreateManyLanding_pageInputEnvelope";
import { Landing_page_sales_channelCreateOrConnectWithoutLanding_pageInput } from "../inputs/Landing_page_sales_channelCreateOrConnectWithoutLanding_pageInput";
import { Landing_page_sales_channelCreateWithoutLanding_pageInput } from "../inputs/Landing_page_sales_channelCreateWithoutLanding_pageInput";
import { Landing_page_sales_channelScalarWhereInput } from "../inputs/Landing_page_sales_channelScalarWhereInput";
import { Landing_page_sales_channelUpdateManyWithWhereWithoutLanding_pageInput } from "../inputs/Landing_page_sales_channelUpdateManyWithWhereWithoutLanding_pageInput";
import { Landing_page_sales_channelUpdateWithWhereUniqueWithoutLanding_pageInput } from "../inputs/Landing_page_sales_channelUpdateWithWhereUniqueWithoutLanding_pageInput";
import { Landing_page_sales_channelUpsertWithWhereUniqueWithoutLanding_pageInput } from "../inputs/Landing_page_sales_channelUpsertWithWhereUniqueWithoutLanding_pageInput";
import { Landing_page_sales_channelWhereUniqueInput } from "../inputs/Landing_page_sales_channelWhereUniqueInput";

@TypeGraphQL.InputType("Landing_page_sales_channelUpdateManyWithoutLanding_pageNestedInput", {})
export class Landing_page_sales_channelUpdateManyWithoutLanding_pageNestedInput {
  @TypeGraphQL.Field(_type => [Landing_page_sales_channelCreateWithoutLanding_pageInput], {
    nullable: true
  })
  create?: Landing_page_sales_channelCreateWithoutLanding_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_sales_channelCreateOrConnectWithoutLanding_pageInput], {
    nullable: true
  })
  connectOrCreate?: Landing_page_sales_channelCreateOrConnectWithoutLanding_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_sales_channelUpsertWithWhereUniqueWithoutLanding_pageInput], {
    nullable: true
  })
  upsert?: Landing_page_sales_channelUpsertWithWhereUniqueWithoutLanding_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => Landing_page_sales_channelCreateManyLanding_pageInputEnvelope, {
    nullable: true
  })
  createMany?: Landing_page_sales_channelCreateManyLanding_pageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_sales_channelWhereUniqueInput], {
    nullable: true
  })
  set?: Landing_page_sales_channelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_sales_channelWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Landing_page_sales_channelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_sales_channelWhereUniqueInput], {
    nullable: true
  })
  delete?: Landing_page_sales_channelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_sales_channelWhereUniqueInput], {
    nullable: true
  })
  connect?: Landing_page_sales_channelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_sales_channelUpdateWithWhereUniqueWithoutLanding_pageInput], {
    nullable: true
  })
  update?: Landing_page_sales_channelUpdateWithWhereUniqueWithoutLanding_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_sales_channelUpdateManyWithWhereWithoutLanding_pageInput], {
    nullable: true
  })
  updateMany?: Landing_page_sales_channelUpdateManyWithWhereWithoutLanding_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_sales_channelScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Landing_page_sales_channelScalarWhereInput[] | undefined;
}
