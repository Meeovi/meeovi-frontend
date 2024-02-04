import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_pageCreateManyCms_pageInputEnvelope } from "../inputs/Landing_pageCreateManyCms_pageInputEnvelope";
import { Landing_pageCreateOrConnectWithoutCms_pageInput } from "../inputs/Landing_pageCreateOrConnectWithoutCms_pageInput";
import { Landing_pageCreateWithoutCms_pageInput } from "../inputs/Landing_pageCreateWithoutCms_pageInput";
import { Landing_pageScalarWhereInput } from "../inputs/Landing_pageScalarWhereInput";
import { Landing_pageUpdateManyWithWhereWithoutCms_pageInput } from "../inputs/Landing_pageUpdateManyWithWhereWithoutCms_pageInput";
import { Landing_pageUpdateWithWhereUniqueWithoutCms_pageInput } from "../inputs/Landing_pageUpdateWithWhereUniqueWithoutCms_pageInput";
import { Landing_pageUpsertWithWhereUniqueWithoutCms_pageInput } from "../inputs/Landing_pageUpsertWithWhereUniqueWithoutCms_pageInput";
import { Landing_pageWhereUniqueInput } from "../inputs/Landing_pageWhereUniqueInput";

@TypeGraphQL.InputType("Landing_pageUpdateManyWithoutCms_pageNestedInput", {})
export class Landing_pageUpdateManyWithoutCms_pageNestedInput {
  @TypeGraphQL.Field(_type => [Landing_pageCreateWithoutCms_pageInput], {
    nullable: true
  })
  create?: Landing_pageCreateWithoutCms_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_pageCreateOrConnectWithoutCms_pageInput], {
    nullable: true
  })
  connectOrCreate?: Landing_pageCreateOrConnectWithoutCms_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_pageUpsertWithWhereUniqueWithoutCms_pageInput], {
    nullable: true
  })
  upsert?: Landing_pageUpsertWithWhereUniqueWithoutCms_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => Landing_pageCreateManyCms_pageInputEnvelope, {
    nullable: true
  })
  createMany?: Landing_pageCreateManyCms_pageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Landing_pageWhereUniqueInput], {
    nullable: true
  })
  set?: Landing_pageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_pageWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Landing_pageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_pageWhereUniqueInput], {
    nullable: true
  })
  delete?: Landing_pageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_pageWhereUniqueInput], {
    nullable: true
  })
  connect?: Landing_pageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_pageUpdateWithWhereUniqueWithoutCms_pageInput], {
    nullable: true
  })
  update?: Landing_pageUpdateWithWhereUniqueWithoutCms_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_pageUpdateManyWithWhereWithoutCms_pageInput], {
    nullable: true
  })
  updateMany?: Landing_pageUpdateManyWithWhereWithoutCms_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_pageScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Landing_pageScalarWhereInput[] | undefined;
}
