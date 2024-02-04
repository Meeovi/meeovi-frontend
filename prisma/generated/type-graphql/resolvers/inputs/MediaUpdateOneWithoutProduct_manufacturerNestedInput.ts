import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutProduct_manufacturerInput } from "../inputs/MediaCreateOrConnectWithoutProduct_manufacturerInput";
import { MediaCreateWithoutProduct_manufacturerInput } from "../inputs/MediaCreateWithoutProduct_manufacturerInput";
import { MediaUpdateToOneWithWhereWithoutProduct_manufacturerInput } from "../inputs/MediaUpdateToOneWithWhereWithoutProduct_manufacturerInput";
import { MediaUpsertWithoutProduct_manufacturerInput } from "../inputs/MediaUpsertWithoutProduct_manufacturerInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaUpdateOneWithoutProduct_manufacturerNestedInput", {})
export class MediaUpdateOneWithoutProduct_manufacturerNestedInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutProduct_manufacturerInput, {
    nullable: true
  })
  create?: MediaCreateWithoutProduct_manufacturerInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutProduct_manufacturerInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutProduct_manufacturerInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpsertWithoutProduct_manufacturerInput, {
    nullable: true
  })
  upsert?: MediaUpsertWithoutProduct_manufacturerInput | undefined;

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

  @TypeGraphQL.Field(_type => MediaUpdateToOneWithWhereWithoutProduct_manufacturerInput, {
    nullable: true
  })
  update?: MediaUpdateToOneWithWhereWithoutProduct_manufacturerInput | undefined;
}
