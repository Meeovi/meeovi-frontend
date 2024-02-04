import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_pageCreateOrConnectWithoutLanding_page_sales_channelInput } from "../inputs/Landing_pageCreateOrConnectWithoutLanding_page_sales_channelInput";
import { Landing_pageCreateWithoutLanding_page_sales_channelInput } from "../inputs/Landing_pageCreateWithoutLanding_page_sales_channelInput";
import { Landing_pageUpdateToOneWithWhereWithoutLanding_page_sales_channelInput } from "../inputs/Landing_pageUpdateToOneWithWhereWithoutLanding_page_sales_channelInput";
import { Landing_pageUpsertWithoutLanding_page_sales_channelInput } from "../inputs/Landing_pageUpsertWithoutLanding_page_sales_channelInput";
import { Landing_pageWhereUniqueInput } from "../inputs/Landing_pageWhereUniqueInput";

@TypeGraphQL.InputType("Landing_pageUpdateOneRequiredWithoutLanding_page_sales_channelNestedInput", {})
export class Landing_pageUpdateOneRequiredWithoutLanding_page_sales_channelNestedInput {
  @TypeGraphQL.Field(_type => Landing_pageCreateWithoutLanding_page_sales_channelInput, {
    nullable: true
  })
  create?: Landing_pageCreateWithoutLanding_page_sales_channelInput | undefined;

  @TypeGraphQL.Field(_type => Landing_pageCreateOrConnectWithoutLanding_page_sales_channelInput, {
    nullable: true
  })
  connectOrCreate?: Landing_pageCreateOrConnectWithoutLanding_page_sales_channelInput | undefined;

  @TypeGraphQL.Field(_type => Landing_pageUpsertWithoutLanding_page_sales_channelInput, {
    nullable: true
  })
  upsert?: Landing_pageUpsertWithoutLanding_page_sales_channelInput | undefined;

  @TypeGraphQL.Field(_type => Landing_pageWhereUniqueInput, {
    nullable: true
  })
  connect?: Landing_pageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Landing_pageUpdateToOneWithWhereWithoutLanding_page_sales_channelInput, {
    nullable: true
  })
  update?: Landing_pageUpdateToOneWithWhereWithoutLanding_page_sales_channelInput | undefined;
}
