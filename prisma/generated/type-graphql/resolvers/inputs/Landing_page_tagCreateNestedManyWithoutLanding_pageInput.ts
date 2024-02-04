import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_page_tagCreateManyLanding_pageInputEnvelope } from "../inputs/Landing_page_tagCreateManyLanding_pageInputEnvelope";
import { Landing_page_tagCreateOrConnectWithoutLanding_pageInput } from "../inputs/Landing_page_tagCreateOrConnectWithoutLanding_pageInput";
import { Landing_page_tagCreateWithoutLanding_pageInput } from "../inputs/Landing_page_tagCreateWithoutLanding_pageInput";
import { Landing_page_tagWhereUniqueInput } from "../inputs/Landing_page_tagWhereUniqueInput";

@TypeGraphQL.InputType("Landing_page_tagCreateNestedManyWithoutLanding_pageInput", {})
export class Landing_page_tagCreateNestedManyWithoutLanding_pageInput {
  @TypeGraphQL.Field(_type => [Landing_page_tagCreateWithoutLanding_pageInput], {
    nullable: true
  })
  create?: Landing_page_tagCreateWithoutLanding_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_tagCreateOrConnectWithoutLanding_pageInput], {
    nullable: true
  })
  connectOrCreate?: Landing_page_tagCreateOrConnectWithoutLanding_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => Landing_page_tagCreateManyLanding_pageInputEnvelope, {
    nullable: true
  })
  createMany?: Landing_page_tagCreateManyLanding_pageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_tagWhereUniqueInput], {
    nullable: true
  })
  connect?: Landing_page_tagWhereUniqueInput[] | undefined;
}
