import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_page_translationCreateManyLanding_pageInputEnvelope } from "../inputs/Landing_page_translationCreateManyLanding_pageInputEnvelope";
import { Landing_page_translationCreateOrConnectWithoutLanding_pageInput } from "../inputs/Landing_page_translationCreateOrConnectWithoutLanding_pageInput";
import { Landing_page_translationCreateWithoutLanding_pageInput } from "../inputs/Landing_page_translationCreateWithoutLanding_pageInput";
import { Landing_page_translationWhereUniqueInput } from "../inputs/Landing_page_translationWhereUniqueInput";

@TypeGraphQL.InputType("Landing_page_translationCreateNestedManyWithoutLanding_pageInput", {})
export class Landing_page_translationCreateNestedManyWithoutLanding_pageInput {
  @TypeGraphQL.Field(_type => [Landing_page_translationCreateWithoutLanding_pageInput], {
    nullable: true
  })
  create?: Landing_page_translationCreateWithoutLanding_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_translationCreateOrConnectWithoutLanding_pageInput], {
    nullable: true
  })
  connectOrCreate?: Landing_page_translationCreateOrConnectWithoutLanding_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => Landing_page_translationCreateManyLanding_pageInputEnvelope, {
    nullable: true
  })
  createMany?: Landing_page_translationCreateManyLanding_pageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Landing_page_translationWhereUniqueInput[] | undefined;
}
