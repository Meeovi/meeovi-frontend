import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutPayment_methodInput } from "../inputs/MediaCreateOrConnectWithoutPayment_methodInput";
import { MediaCreateWithoutPayment_methodInput } from "../inputs/MediaCreateWithoutPayment_methodInput";
import { MediaUpdateToOneWithWhereWithoutPayment_methodInput } from "../inputs/MediaUpdateToOneWithWhereWithoutPayment_methodInput";
import { MediaUpsertWithoutPayment_methodInput } from "../inputs/MediaUpsertWithoutPayment_methodInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaUpdateOneWithoutPayment_methodNestedInput", {})
export class MediaUpdateOneWithoutPayment_methodNestedInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutPayment_methodInput, {
    nullable: true
  })
  create?: MediaCreateWithoutPayment_methodInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutPayment_methodInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutPayment_methodInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpsertWithoutPayment_methodInput, {
    nullable: true
  })
  upsert?: MediaUpsertWithoutPayment_methodInput | undefined;

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

  @TypeGraphQL.Field(_type => MediaUpdateToOneWithWhereWithoutPayment_methodInput, {
    nullable: true
  })
  update?: MediaUpdateToOneWithWhereWithoutPayment_methodInput | undefined;
}
