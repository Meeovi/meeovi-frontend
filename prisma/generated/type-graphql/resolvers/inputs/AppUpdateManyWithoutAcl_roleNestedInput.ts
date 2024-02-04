import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateManyAcl_roleInputEnvelope } from "../inputs/AppCreateManyAcl_roleInputEnvelope";
import { AppCreateOrConnectWithoutAcl_roleInput } from "../inputs/AppCreateOrConnectWithoutAcl_roleInput";
import { AppCreateWithoutAcl_roleInput } from "../inputs/AppCreateWithoutAcl_roleInput";
import { AppScalarWhereInput } from "../inputs/AppScalarWhereInput";
import { AppUpdateManyWithWhereWithoutAcl_roleInput } from "../inputs/AppUpdateManyWithWhereWithoutAcl_roleInput";
import { AppUpdateWithWhereUniqueWithoutAcl_roleInput } from "../inputs/AppUpdateWithWhereUniqueWithoutAcl_roleInput";
import { AppUpsertWithWhereUniqueWithoutAcl_roleInput } from "../inputs/AppUpsertWithWhereUniqueWithoutAcl_roleInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppUpdateManyWithoutAcl_roleNestedInput", {})
export class AppUpdateManyWithoutAcl_roleNestedInput {
  @TypeGraphQL.Field(_type => [AppCreateWithoutAcl_roleInput], {
    nullable: true
  })
  create?: AppCreateWithoutAcl_roleInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppCreateOrConnectWithoutAcl_roleInput], {
    nullable: true
  })
  connectOrCreate?: AppCreateOrConnectWithoutAcl_roleInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppUpsertWithWhereUniqueWithoutAcl_roleInput], {
    nullable: true
  })
  upsert?: AppUpsertWithWhereUniqueWithoutAcl_roleInput[] | undefined;

  @TypeGraphQL.Field(_type => AppCreateManyAcl_roleInputEnvelope, {
    nullable: true
  })
  createMany?: AppCreateManyAcl_roleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AppWhereUniqueInput], {
    nullable: true
  })
  set?: AppWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AppWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppWhereUniqueInput], {
    nullable: true
  })
  delete?: AppWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppWhereUniqueInput], {
    nullable: true
  })
  connect?: AppWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppUpdateWithWhereUniqueWithoutAcl_roleInput], {
    nullable: true
  })
  update?: AppUpdateWithWhereUniqueWithoutAcl_roleInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppUpdateManyWithWhereWithoutAcl_roleInput], {
    nullable: true
  })
  updateMany?: AppUpdateManyWithWhereWithoutAcl_roleInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AppScalarWhereInput[] | undefined;
}
