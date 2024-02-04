import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_shipping_methodCreateManyMediaInputEnvelope } from "../inputs/App_shipping_methodCreateManyMediaInputEnvelope";
import { App_shipping_methodCreateOrConnectWithoutMediaInput } from "../inputs/App_shipping_methodCreateOrConnectWithoutMediaInput";
import { App_shipping_methodCreateWithoutMediaInput } from "../inputs/App_shipping_methodCreateWithoutMediaInput";
import { App_shipping_methodScalarWhereInput } from "../inputs/App_shipping_methodScalarWhereInput";
import { App_shipping_methodUpdateManyWithWhereWithoutMediaInput } from "../inputs/App_shipping_methodUpdateManyWithWhereWithoutMediaInput";
import { App_shipping_methodUpdateWithWhereUniqueWithoutMediaInput } from "../inputs/App_shipping_methodUpdateWithWhereUniqueWithoutMediaInput";
import { App_shipping_methodUpsertWithWhereUniqueWithoutMediaInput } from "../inputs/App_shipping_methodUpsertWithWhereUniqueWithoutMediaInput";
import { App_shipping_methodWhereUniqueInput } from "../inputs/App_shipping_methodWhereUniqueInput";

@TypeGraphQL.InputType("App_shipping_methodUpdateManyWithoutMediaNestedInput", {})
export class App_shipping_methodUpdateManyWithoutMediaNestedInput {
  @TypeGraphQL.Field(_type => [App_shipping_methodCreateWithoutMediaInput], {
    nullable: true
  })
  create?: App_shipping_methodCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_shipping_methodCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: App_shipping_methodCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_shipping_methodUpsertWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  upsert?: App_shipping_methodUpsertWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => App_shipping_methodCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: App_shipping_methodCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_shipping_methodWhereUniqueInput], {
    nullable: true
  })
  set?: App_shipping_methodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_shipping_methodWhereUniqueInput], {
    nullable: true
  })
  disconnect?: App_shipping_methodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_shipping_methodWhereUniqueInput], {
    nullable: true
  })
  delete?: App_shipping_methodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_shipping_methodWhereUniqueInput], {
    nullable: true
  })
  connect?: App_shipping_methodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_shipping_methodUpdateWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  update?: App_shipping_methodUpdateWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_shipping_methodUpdateManyWithWhereWithoutMediaInput], {
    nullable: true
  })
  updateMany?: App_shipping_methodUpdateManyWithWhereWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_shipping_methodScalarWhereInput], {
    nullable: true
  })
  deleteMany?: App_shipping_methodScalarWhereInput[] | undefined;
}
