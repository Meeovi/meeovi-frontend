import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutShipping_methodInput } from "../inputs/MediaCreateOrConnectWithoutShipping_methodInput";
import { MediaCreateWithoutShipping_methodInput } from "../inputs/MediaCreateWithoutShipping_methodInput";
import { MediaUpdateToOneWithWhereWithoutShipping_methodInput } from "../inputs/MediaUpdateToOneWithWhereWithoutShipping_methodInput";
import { MediaUpsertWithoutShipping_methodInput } from "../inputs/MediaUpsertWithoutShipping_methodInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaUpdateOneWithoutShipping_methodNestedInput", {})
export class MediaUpdateOneWithoutShipping_methodNestedInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutShipping_methodInput, {
    nullable: true
  })
  create?: MediaCreateWithoutShipping_methodInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutShipping_methodInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutShipping_methodInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpsertWithoutShipping_methodInput, {
    nullable: true
  })
  upsert?: MediaUpsertWithoutShipping_methodInput | undefined;

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

  @TypeGraphQL.Field(_type => MediaUpdateToOneWithWhereWithoutShipping_methodInput, {
    nullable: true
  })
  update?: MediaUpdateToOneWithWhereWithoutShipping_methodInput | undefined;
}
