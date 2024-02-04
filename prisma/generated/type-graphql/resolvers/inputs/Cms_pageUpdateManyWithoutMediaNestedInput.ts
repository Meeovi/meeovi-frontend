import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageCreateManyMediaInputEnvelope } from "../inputs/Cms_pageCreateManyMediaInputEnvelope";
import { Cms_pageCreateOrConnectWithoutMediaInput } from "../inputs/Cms_pageCreateOrConnectWithoutMediaInput";
import { Cms_pageCreateWithoutMediaInput } from "../inputs/Cms_pageCreateWithoutMediaInput";
import { Cms_pageScalarWhereInput } from "../inputs/Cms_pageScalarWhereInput";
import { Cms_pageUpdateManyWithWhereWithoutMediaInput } from "../inputs/Cms_pageUpdateManyWithWhereWithoutMediaInput";
import { Cms_pageUpdateWithWhereUniqueWithoutMediaInput } from "../inputs/Cms_pageUpdateWithWhereUniqueWithoutMediaInput";
import { Cms_pageUpsertWithWhereUniqueWithoutMediaInput } from "../inputs/Cms_pageUpsertWithWhereUniqueWithoutMediaInput";
import { Cms_pageWhereUniqueInput } from "../inputs/Cms_pageWhereUniqueInput";

@TypeGraphQL.InputType("Cms_pageUpdateManyWithoutMediaNestedInput", {})
export class Cms_pageUpdateManyWithoutMediaNestedInput {
  @TypeGraphQL.Field(_type => [Cms_pageCreateWithoutMediaInput], {
    nullable: true
  })
  create?: Cms_pageCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_pageCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: Cms_pageCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_pageUpsertWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  upsert?: Cms_pageUpsertWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => Cms_pageCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: Cms_pageCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Cms_pageWhereUniqueInput], {
    nullable: true
  })
  set?: Cms_pageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_pageWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Cms_pageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_pageWhereUniqueInput], {
    nullable: true
  })
  delete?: Cms_pageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_pageWhereUniqueInput], {
    nullable: true
  })
  connect?: Cms_pageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_pageUpdateWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  update?: Cms_pageUpdateWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_pageUpdateManyWithWhereWithoutMediaInput], {
    nullable: true
  })
  updateMany?: Cms_pageUpdateManyWithWhereWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_pageScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Cms_pageScalarWhereInput[] | undefined;
}
