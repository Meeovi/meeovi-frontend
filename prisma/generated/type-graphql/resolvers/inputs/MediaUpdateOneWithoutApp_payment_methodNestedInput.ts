import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutApp_payment_methodInput } from "../inputs/MediaCreateOrConnectWithoutApp_payment_methodInput";
import { MediaCreateWithoutApp_payment_methodInput } from "../inputs/MediaCreateWithoutApp_payment_methodInput";
import { MediaUpdateToOneWithWhereWithoutApp_payment_methodInput } from "../inputs/MediaUpdateToOneWithWhereWithoutApp_payment_methodInput";
import { MediaUpsertWithoutApp_payment_methodInput } from "../inputs/MediaUpsertWithoutApp_payment_methodInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaUpdateOneWithoutApp_payment_methodNestedInput", {})
export class MediaUpdateOneWithoutApp_payment_methodNestedInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutApp_payment_methodInput, {
    nullable: true
  })
  create?: MediaCreateWithoutApp_payment_methodInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutApp_payment_methodInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutApp_payment_methodInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpsertWithoutApp_payment_methodInput, {
    nullable: true
  })
  upsert?: MediaUpsertWithoutApp_payment_methodInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  disconnect?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  delete?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateToOneWithWhereWithoutApp_payment_methodInput, {
    nullable: true
  })
  update?: MediaUpdateToOneWithWhereWithoutApp_payment_methodInput | undefined;
}
