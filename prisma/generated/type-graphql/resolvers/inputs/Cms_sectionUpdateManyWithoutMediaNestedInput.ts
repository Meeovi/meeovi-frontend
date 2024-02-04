import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_sectionCreateManyMediaInputEnvelope } from "../inputs/Cms_sectionCreateManyMediaInputEnvelope";
import { Cms_sectionCreateOrConnectWithoutMediaInput } from "../inputs/Cms_sectionCreateOrConnectWithoutMediaInput";
import { Cms_sectionCreateWithoutMediaInput } from "../inputs/Cms_sectionCreateWithoutMediaInput";
import { Cms_sectionScalarWhereInput } from "../inputs/Cms_sectionScalarWhereInput";
import { Cms_sectionUpdateManyWithWhereWithoutMediaInput } from "../inputs/Cms_sectionUpdateManyWithWhereWithoutMediaInput";
import { Cms_sectionUpdateWithWhereUniqueWithoutMediaInput } from "../inputs/Cms_sectionUpdateWithWhereUniqueWithoutMediaInput";
import { Cms_sectionUpsertWithWhereUniqueWithoutMediaInput } from "../inputs/Cms_sectionUpsertWithWhereUniqueWithoutMediaInput";
import { Cms_sectionWhereUniqueInput } from "../inputs/Cms_sectionWhereUniqueInput";

@TypeGraphQL.InputType("Cms_sectionUpdateManyWithoutMediaNestedInput", {})
export class Cms_sectionUpdateManyWithoutMediaNestedInput {
  @TypeGraphQL.Field(_type => [Cms_sectionCreateWithoutMediaInput], {
    nullable: true
  })
  create?: Cms_sectionCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_sectionCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: Cms_sectionCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_sectionUpsertWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  upsert?: Cms_sectionUpsertWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => Cms_sectionCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: Cms_sectionCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Cms_sectionWhereUniqueInput], {
    nullable: true
  })
  set?: Cms_sectionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_sectionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Cms_sectionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_sectionWhereUniqueInput], {
    nullable: true
  })
  delete?: Cms_sectionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_sectionWhereUniqueInput], {
    nullable: true
  })
  connect?: Cms_sectionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_sectionUpdateWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  update?: Cms_sectionUpdateWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_sectionUpdateManyWithWhereWithoutMediaInput], {
    nullable: true
  })
  updateMany?: Cms_sectionUpdateManyWithWhereWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_sectionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Cms_sectionScalarWhereInput[] | undefined;
}
