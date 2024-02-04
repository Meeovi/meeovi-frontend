import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_page_translationCreateManyLanding_pageInputEnvelope } from "../inputs/Landing_page_translationCreateManyLanding_pageInputEnvelope";
import { Landing_page_translationCreateOrConnectWithoutLanding_pageInput } from "../inputs/Landing_page_translationCreateOrConnectWithoutLanding_pageInput";
import { Landing_page_translationCreateWithoutLanding_pageInput } from "../inputs/Landing_page_translationCreateWithoutLanding_pageInput";
import { Landing_page_translationScalarWhereInput } from "../inputs/Landing_page_translationScalarWhereInput";
import { Landing_page_translationUpdateManyWithWhereWithoutLanding_pageInput } from "../inputs/Landing_page_translationUpdateManyWithWhereWithoutLanding_pageInput";
import { Landing_page_translationUpdateWithWhereUniqueWithoutLanding_pageInput } from "../inputs/Landing_page_translationUpdateWithWhereUniqueWithoutLanding_pageInput";
import { Landing_page_translationUpsertWithWhereUniqueWithoutLanding_pageInput } from "../inputs/Landing_page_translationUpsertWithWhereUniqueWithoutLanding_pageInput";
import { Landing_page_translationWhereUniqueInput } from "../inputs/Landing_page_translationWhereUniqueInput";

@TypeGraphQL.InputType("Landing_page_translationUpdateManyWithoutLanding_pageNestedInput", {})
export class Landing_page_translationUpdateManyWithoutLanding_pageNestedInput {
  @TypeGraphQL.Field(_type => [Landing_page_translationCreateWithoutLanding_pageInput], {
    nullable: true
  })
  create?: Landing_page_translationCreateWithoutLanding_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_translationCreateOrConnectWithoutLanding_pageInput], {
    nullable: true
  })
  connectOrCreate?: Landing_page_translationCreateOrConnectWithoutLanding_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_translationUpsertWithWhereUniqueWithoutLanding_pageInput], {
    nullable: true
  })
  upsert?: Landing_page_translationUpsertWithWhereUniqueWithoutLanding_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => Landing_page_translationCreateManyLanding_pageInputEnvelope, {
    nullable: true
  })
  createMany?: Landing_page_translationCreateManyLanding_pageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Landing_page_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Landing_page_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Landing_page_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Landing_page_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_translationUpdateWithWhereUniqueWithoutLanding_pageInput], {
    nullable: true
  })
  update?: Landing_page_translationUpdateWithWhereUniqueWithoutLanding_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_translationUpdateManyWithWhereWithoutLanding_pageInput], {
    nullable: true
  })
  updateMany?: Landing_page_translationUpdateManyWithWhereWithoutLanding_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Landing_page_translationScalarWhereInput[] | undefined;
}
